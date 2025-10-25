/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import { CreatorFactory, CreatorFactory_SetupNewContract } from "generated";

CreatorFactory.SetupNewContract.handler(async ({ event, context }) => {
  const entity: CreatorFactory_SetupNewContract = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    address: event.params.newContract,
    contractURI: event.params.contractURI,
    defaultAdmin: event.params.defaultAdmin,
    chainId: event.chainId,
    transactionHash: event.transaction.hash,
    blockNumber: event.block.number
  };
  context.CreatorFactory_SetupNewContract.set(entity);
});