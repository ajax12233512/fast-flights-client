import React from 'react'
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import ChooseFlight from '../../components/ChooseFlight/ChooseFlight';
import './Home.css';
import Hero from '../../components/Hero/Hero';
import BookingForm from '../../components/BookingForm/BookingForm';
function Home() {
  
  return (
    <div id="booking" className="section">
		<div className="section-center">
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<Hero />
					</div>
					<div className="col-md-7 col-md-offset-1">
						<BookingForm />
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Home