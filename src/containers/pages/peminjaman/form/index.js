import React, { Component } from 'react';
import PeminjamanForm from './PeminjamanForm';
import { connect } from 'react-redux';
import { createPeminjamanAPI, storePeminjamanAPI, editPeminjamanAPI, updatePeminjamanAPI } from '../../../../actions/peminjaman';

class PeminjamanFormPage extends Component {

	componentDidMount() {
		const { id } = this.props.match.params;
		if (id) {
			this.props.editPeminjaman(id)
		} else {
			this.props.createPeminjaman()
		}
	}

	render() {
		return(
			<div className="col-md-7 mx-auto">
				<h3>Peminjaman Form</h3>
				<hr/>
				<PeminjamanForm 
					storePeminjaman={this.props.storePeminjaman}
					updatePeminjaman={this.props.updatePeminjaman}
					peminjaman={this.props.peminjaman}
					users={this.props.users}
					books={this.props.books}
				/>
			</div>
		)
	}

}

const mapStateToProps = (state) => ({
	peminjaman: state.peminjaman.peminjaman,
	users: state.peminjaman.users,
	books: state.peminjaman.books
})

const mapDispatchToProps = (dispatch) => ({
	createPeminjaman: () => dispatch(createPeminjamanAPI()),
	storePeminjaman: (data) => dispatch(storePeminjamanAPI(data)),
	editPeminjaman: (id) => dispatch(editPeminjamanAPI(id)),
	updatePeminjaman: (data, id) => dispatch(updatePeminjamanAPI(data, id))
})

export default connect(mapStateToProps , mapDispatchToProps)(PeminjamanFormPage);