const BubStake = artifacts.require("BubStake")
const TrainBostons = artifacts.require("TrainBostons")

module.exports = async function (callback) {
  const accounts = await new web3.eth.getAccounts()
  const bubStake = await BubStake.deployed()
  const trainBostons = await TrainBostons.deployed()

  // Verify accounts[0] and trainBostons balance of BubStake before and after the transfer
  balanceBubStakeBeforeAccounts0 = await bubStake.balanceOf(accounts[0])
  balanceBubStakeBeforeTrainBostons = await bubStake.balanceOf(trainBostons.address)
  console.log("*** Bub Stake ***")
  console.log(
    "Balance BubStake Before accounts[0] " +
      web3.utils.fromWei(balanceBubStakeBeforeAccounts0.toString())
  )
  console.log(
    "Balance BubStake Before TrainBostons " +
      web3.utils.fromWei(balanceBubStakeBeforeTrainBostons.toString())
  )

  console.log("*** Train Boston ***")
  balanceTrainBostonsBeforeAccounts0 = await trainBostons.balanceOf(accounts[0])
  balanceTrainBostonsBeforeTrainBostons = await trainBostons.balanceOf(trainBostons.address)
  console.log(
    "Balance TrainBostons Before accounts[0] " +
      web3.utils.fromWei(balanceTrainBostonsBeforeAccounts0.toString())
  )
  console.log(
    "Balance TrainBostons Before TrainBostons " +
      web3.utils.fromWei(balanceTrainBostonsBeforeTrainBostons.toString())
  )

  // Call Deposit function from TrainBostons
  console.log("Call Withdraw Function")
  await trainBostons.withdraw(web3.utils.toWei("10000", "ether"))

  console.log("*** Bub Stake ***")
  balanceBubStakeAfterAccounts0 = await bubStake.balanceOf(accounts[0])
  balanceBubStakeAfterTrainBostons = await bubStake.balanceOf(trainBostons.address)
  console.log(
    "Balance BubStake After accounts[0] " +
      web3.utils.fromWei(balanceBubStakeAfterAccounts0.toString())
  )
  console.log(
    "Balance BubStake After TrainBostons " +
      web3.utils.fromWei(balanceBubStakeAfterTrainBostons.toString())
  )

  console.log("*** Train Boston ***")
  balanceTrainBostonsAfterAccounts0 = await trainBostons.balanceOf(accounts[0])
  balanceTrainBostonsAfterTrainBostons = await trainBostons.balanceOf(trainBostons.address)
  console.log(
    "Balance TrainBostons After accounts[0] " +
      web3.utils.fromWei(balanceTrainBostonsAfterAccounts0.toString())
  )
  console.log(
    "Balance TrainBostons After TrainBostons " +
      web3.utils.fromWei(balanceTrainBostonsAfterTrainBostons.toString())
  )

  // End function
  callback()
}