import create from "./operations/create";
import read from "./operations/read";
import update from "./operations/update";
import remove from "./operations/remove";

const trainingOperations = {
  create,
  read,
  update,
  delete: remove,
};

export default trainingOperations;
