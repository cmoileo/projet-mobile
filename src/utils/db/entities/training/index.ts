import create from "./operations/create";
import readByUserId from "./operations/readByUserId";
import update from "./operations/update";
import remove from "./operations/remove";

const trainingOperations = {
  create,
  readByUserId,
  update,
  delete: remove,
};

export default trainingOperations;
