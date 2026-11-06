

const Card = ({
  firstName,
  lastName
}: {
  firstName : string,
  lastName : string 

}) => {
  return (

    <div className="card">
      <p>{firstName}</p>
      <p>{lastName}</p>
    </div>
  );
};

export default Card;
