const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const MIN_FORM_FILL_TIME_MS = 3 * 1000;

const requestLog = new Map();

const getRequestKey = (req) => {
  if (Array.isArray(req.ips) && req.ips.length > 0) {
    return req.ips[0];
  }

  return req.ip || "unknown";
};

const guardContactRequest = (req, res, next) => {
  const now = Date.now();
  const { companyWebsite = "", startedAt = "" } = req.body ?? {};

  if (typeof companyWebsite === "string" && companyWebsite.trim()) {
    return res.status(400).json({
      success: false,
      message: "Spam check failed.",
    });
  }

  const startedAtTime = Date.parse(startedAt);

  if (!startedAt || Number.isNaN(startedAtTime) || startedAtTime > now) {
    return res.status(400).json({
      success: false,
      message: "Invalid form session.",
    });
  }

  if (now - startedAtTime < MIN_FORM_FILL_TIME_MS) {
    return res.status(400).json({
      success: false,
      message: "Form submitted too quickly. Please try again.",
    });
  }

  const requestKey = getRequestKey(req);
  const recentRequests = (requestLog.get(requestKey) || []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
    return res.status(429).json({
      success: false,
      message: "Too many submissions. Please wait a few minutes and try again.",
    });
  }

  recentRequests.push(now);
  requestLog.set(requestKey, recentRequests);

  return next();
};

module.exports = { guardContactRequest };