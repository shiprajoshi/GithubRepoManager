var React=require('react');
var Link=require('react-router').Link;
var IndexLink=require('react-router').IndexLink;
var Nav=React.createClass({
	render: function(){
		return(

			<div className="container-fluid">
		<div className="row">
		<div className="col-md-12">
			<nav className="navbar navbar-fixed-top navbar-inverse" role="navigation">
				<div className="navbar-header">

					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
						 <span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
					</button> <a className="navbar-brand" href="#"> RepoManagerApp </a>
				</div>

				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul className="nav navbar-nav">
						<li className="active">
							<IndexLink to="/"> Home </IndexLink>
						</li>
						<li>
							<Link to="/search"> Search Repositories </Link>
						</li>
						<li>
							<Link to="/about"> About </Link>
						</li>
						<li>
							<Link to="/contactUs"> Contact Us </Link>
						</li>
						<li>
							<Link to="/LogoutComponent"> Logout </Link>
						</li>
						<li>
							<Link to="/SignUp">SignUp</Link>
						</li>
						<li className="dropdown">
							 <a href="#" className="dropdown-toggle" data-toggle="dropdown"> Actions <strong className="caret"></strong></a>
							<ul className="dropdown-menu">
								<li>
									<Link to="/getFavourites"> Get Favourite Repositories </Link>
								</li>
								<li className="divider">
								</li>
							</ul>
						</li>
					</ul>
					
					
				</div>

			</nav>
		</div>
	</div>
</div>

		);
	}
});

module.exports=Nav;
