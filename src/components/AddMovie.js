import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

class AddMovie extends React.Component {
  state = {
    modalisopen: false,
    name: "",
    date: "",
    rating: "",
    image: ""
  };

  opneModal = () => {
    this.setState({
      modalisopen: !this.state.modalisopen
    });
  };

  handlechange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <button className="Add-btn" onClick={() => this.opneModal()}>
          Add
        </button>
        <Modal
          className="add-modal"
          isOpen={this.state.modalisopen}
          onRequestClose={this.state.modalisopen}
        >
          <h1>Adddmovie</h1>
          <form
            className="addmovie"
            onSubmit={e => {
              e.preventDefault();
              this.props.addmovie({
                id: Math.random(),
                ...this.state,
                ...this.setState({ modalisopen: false })
              });
            }}
          >
            <label> Movie Name</label>
            <input type="text" name="name" onChange={this.handlechange} />
            <label>Movie Release Date</label>
            <input type="text" name="date" onChange={this.handlechange} />
            <label>Movie Rate</label>
            <input
              type="number"
              min="1"
              max="5"
              name="rating"
              onChange={this.handlechange}
            />
            <label>Movie Image</label>
            <input type="url" name="image" onChange={this.handlechange} />

            <button onClick={() => this.opneModal()}>close</button>
            <button>submit</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default AddMovie;
