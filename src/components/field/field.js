import React from "react";
import FieldItem from "../field-item/field-item";
import { itemCompare, getCheck, clear } from "../../actions";
import { connect } from "react-redux";
import "./field.css";

const Field = ({ items, onItemCompare, getCheck, clear }) => {

  return (
    <div className="field-wrap">
    
      {items.map((item) =>
      (
          <FieldItem 
          key={item.id} 
          onItemCompare={() => onItemCompare(item) }
          getCheck={ () => getCheck(item)}
          clear={ () => clear()}
          item={item}
           />
      ))}
    </div>
  );
};


const mapStateToProps = ({ fieldItems }) => {
  return {
    items: fieldItems,
  };
};
const mapDispatchToProps = {
  onItemCompare: itemCompare,
  getCheck: getCheck,
  clear: clear,
};

export default connect(mapStateToProps, mapDispatchToProps)(Field);
