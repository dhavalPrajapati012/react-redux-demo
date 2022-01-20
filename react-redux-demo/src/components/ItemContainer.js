import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';


function ItemContainer(props) {
  return (
    <div>
        <h2>Item - {props.item}</h2>
        <button onClick={props.buyItem}>Buy Items</button>
    </div>
  );
}

const mapStateToPropes = (state,ownPropes) => {
    const itemState = ownPropes.cake 
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams

    return {
        item : itemState
    }
}

const mapDispatchToProps = (dispatch,ownPropes) => {
    const dispatchFunction = ownPropes.cake 
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream())

    return {
        buyItem : dispatchFunction
    }
}

export default connect (mapStateToPropes, mapDispatchToProps) (ItemContainer);
