import CardList from "../components/card/card-list/CardList";
import TransactionList from "../components/transaction/transaction-list/TransactionList";

function HomePage() {
  return (
    <div>
      <CardList cards={[]} />
      <TransactionList transactions={[]} />
    </div>
  );
}

export default HomePage;
