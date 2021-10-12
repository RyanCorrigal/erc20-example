const BubStake = artifacts.require("BubStake")
const TrainBostons = artifacts.require("TrainBostons")

module.exports = async function (callback) {
  bubStake = await BubStake.deployed()
  trainBostons = await TrainBostons.deployed()
  balance = await bubStake.balanceOf(farmToken.address)
  console.log(web3.utils.fromWei(balance.toString()))
  callback()
}
