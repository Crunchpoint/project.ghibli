export const checkApiAccess = (handler) => async (req, res) => {
  const hostname = req.headers.host.split(":")[0];
  console.log(req.headers);
  if (hostname !== "localhost") {
    res.status(403).send("Forbidden");

    return;
  }

  return handler(req, res);
};
