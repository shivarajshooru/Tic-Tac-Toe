import React from "react";
import GridItem from '../GridItem/GridItem';
import "./GridRow.css";

export default class GridRow extends React.Component {
    constructor(props) {
        super(props);
    }
   

    render() {
        return (
             <div className="grid-row">
                 {this.props.row.map((boardCell, colIdx) => (
                     <GridItem
                     key={colIdx}
                     value={boardCell}
                     colIdx={colIdx}
                     rowIdx={this.props.rowIdx}
                     playerClickCB={this.props.playerClickCB}
                     />
                 ))}
                 </div>
        );
    }
}