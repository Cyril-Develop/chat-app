const prisma = require("../lib/prisma");


module.exports = async (req, res, next) => {
  const userId = req.userId;

  const activeAdminBlock = await prisma.adminBlock.findFirst({
    where: {
      userId: userId,
      isActive: true,
    },
    select: {
      reason: true,
      endDate: true,
    },
  });

  if (activeAdminBlock) {
    return res.status(403).json({
      error: "Action non autorisée",
      errorCode: "BLOCK_ADMIN",
      reason: activeAdminBlock.reason,
      endDate: activeAdminBlock.endDate,
    });
  }

  next();
};
