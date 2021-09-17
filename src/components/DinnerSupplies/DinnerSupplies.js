function DinnerSupplies (props) (
    return(
        <>
        <h2>Dinner Supplies</h2>
      <div>
        Spoons: {props.guestList.length * 2}
      </div>
      <div>
        Forks: {props.guestList.length * 2}
      </div>
      <div>
        Knives: {props.guestList.length * 2}
      </div>
        </>
    )
)


export default DinnerSupplies;