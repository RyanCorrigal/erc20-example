const BubStake = artifacts.require("BubStake")
const TrainBostons = artifacts.require("TrainBostons")

module.exports = async function (callback) {
  const accounts = await new web3.eth.getAccounts()
  const bubStake = await BubStake.deployed()
  const trainBostons = await TrainBostons.deployed()

  // Returns the remaining number of tokens that spender will be allowed to spend on behalf of owner through transferFrom.
  // This is zero by default.
  const allowanceBefore = await bubStake.allowance(
    accounts[0],
    trainBostons.address
  )
  console.log(
    "Amount of BubStake TrainBostons is allowed to transfer on our behalf Before: " +
      allowanceBefore.toString()
  )

  // In order to allow the Smart Contract to transfer to BubStake (ERC-20) on the accounts[0] behalf,
  // we must explicitly allow it.
  // We allow trainBostons to transfer x amount of BubStake on our behalf
  await bubStake.approve(trainBostons.address, web3.utils.toWei("10000", "ether"))

  // Validate that the trainBostons can now move x amount of BubStake on our behalf
  const allowanceAfter = await bubStake.allowance(accounts[0], trainBostons.address)
  console.log(
    "Amount of BubStake TrainBostons is allowed to transfer on our behalf After: " +
      allowanceAfter.toString()
  )

  // Verify accounts[0] and trainBostons balance of BubStake before and after the transfer
  balanceBubStakeBeforeAccounts0 = await bubStake.balanceOf(accounts[0])
  balanceBubStakeBeforeTrainBostons = await bubStake.balanceOf(trainBostons.address)
  console.log("*** Bub Stake ***")
  console.log(
    "Balance BubStake Before accounts[0] " +
      web3.utils.fromWei(balanceBubStakeBeforeAccounts0.toString())
  )
  console.log(
    "Balance BubStake Before BostonTrain " +
      web3.utils.fromWei(balanceBubStakeBeforeTrainBostons.toString())
  )

  console.log("*** Train Bostons ***")
  balanceTrainBostonsBeforeAccounts0 = await trainBostons.balanceOf(accounts[0])
  balanceTrainBostonsBeforeTrainBostons = await trainBostons.balanceOf(trainBostons.address)
  console.log(
    "Balance TrainBostons Before accounts[0] " +
      web3.utils.fromWei(balanceTrainBostonsBeforeAccounts0.toString())
  )
  console.log(
    "Balance TrainBostons Before BostonTrain " +
      web3.utils.fromWei(balanceTrainBostonsBeforeTrainBostons.toString())
  )
  // Call Deposit function from TrainBostons
  console.log("Call Deposit Function")
  await trainBostons.deposit(web3.utils.toWei("10000", "ether"))
  console.log("*** Bub Stake ***")
  balanceBubStakeAfterAccounts0 = await bubStake.balanceOf(accounts[0])
  balanceBubStakeAfterTrainBostons = await bubStake.balanceOf(trainBostons.address)
  console.log(
    "Balance BubStake After accounts[0] " +
      web3.utils.fromWei(balanceBubStakeAfterAccounts0.toString())
  )
  console.log(
    "Balance BubStake After BostonTrain " +
      web3.utils.fromWei(balanceBubStakeAfterTrainBostons.toString())
  )

  console.log("*** Train Bostons ***")
  balanceTrainBostonsAfterAccounts0 = await trainBostons.balanceOf(accounts[0])
  balanceTrainBostonsAfterTrainBostons = await trainBostons.balanceOf(trainBostons.address)
  console.log(
    "Balance TrainBostons After accounts[0] " +
      web3.utils.fromWei(balanceTrainBostonsAfterAccounts0.toString())
  )
  console.log(
    "Balance TrainBostons After BostonTrain " +
      web3.utils.fromWei(balanceTrainBostonsAfterTrainBostons.toString())
  )

  // End function
  callback()
}