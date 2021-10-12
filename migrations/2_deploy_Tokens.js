const BubStake = artifacts.require("BubStake")
const TrainBostons = artifacts.require("TrainBostons")

module.exports = async function (deployer, network, accounts) {
  // Deploy BubStake
  await deployer.deploy(BubStake)
  const bubStake = await BubStake.deployed()

  // Deploy Train Bostons
  await deployer.deploy(TrainBostons, bubStake.address)
  const trainBostons = await TrainBostons.deployed()
}
