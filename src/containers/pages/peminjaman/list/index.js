import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPeminjamanAPI, deletePeminjamanAPI } from '../../../../actions/peminjaman';
import PeminjamanList from './PeminjamanList';

class PeminjamanListPage extends Component {

	componentDidMount() {
		this.props.getPeminjaman();
	}

	render() {

		return (
			<React.Fragment>
				<Link to="/peminjaman/create" className="btn btn-primary">Create Peminjaman</Link>

				<PeminjamanList 
					peminjamans={this.props.peminjamans} 
					deletePeminjaman={this.props.deletePeminjaman}
				/> 

			</React.Fragment>
		)
	}

}

const mapDispatchToProps = (dispatch) => ({
	getPeminjaman: () => dispatch(getPeminjamanAPI()),
	deletePeminjaman: (id) => dispatch(deletePeminjamanAPI(id))
})

const mapStateToProps = (state) => ({
	peminjamans: state.peminjaman.peminjamans
})

export default connect(mapStateToProps, mapDispatchToProps)(PeminjamanListPage)