import React from "react";
import { connect } from "react-redux";
import { getCharacterDetail, clearDetail } from "../actions/actions";


class Detail extends React.Component{


    
componentDidMount(){
    const id=this.props.match.params.id
    this.props.getCharDet(id)
}

componentWillUnmount(){
    this.props.clearDetail()
}

    render(){
        return (
            <div>
                <img src={this.props.charDetail.image} alt={this.props.charDetail.name} />
                <p>{this.props.charDetail.name}</p>
                <p>Estado: {this.props.charDetail.status}</p>
                <p>Especie: {this.props.charDetail.species}</p>                
            </div>
        )
    }
}

function mapStateToProps(state){
return {
    charDetail: state.characterDetail
};
}


function mapDispatchToProps(dispatch){
    return {
        getCharDet: (id)=> dispatch(getCharacterDetail(id)),
        clearDetail: ()=> dispatch(clearDetail())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);



