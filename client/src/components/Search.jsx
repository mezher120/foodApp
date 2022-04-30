import react from "react";
import axios from "axios";
import { connect } from "react-redux";


export function Search(props) {
    

let [search, setSearch] = React.useState("");


async function getSearch(input) {
  try {
    const result = await axios.get(`http://localhost:3001/recipes?name=${input.name}`);
    console.log(result.data);
    const data = result.data;
    setSearch(data);
  } catch (error) {
    console.log(error);
  }
}

}

function mapDispatchToProps(dispatch) {
    return {
      getPost: search => dispatch(searching(search))
    };
  }

export default connect(null, mapDispatchToProps)(Search);

