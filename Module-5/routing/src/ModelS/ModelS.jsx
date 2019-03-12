import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Description from '../Subrout/Description';
import History from '../Subrout/History';
import Image from '../Subrout/Image';

import './ModelS.css';

const ModelS = ({match}) => {
  return (
    <div>
      <h2 className="article__title">Model S</h2>
      <p>
        The Tesla Model S is an all-electric five-door liftback car, produced by
        Tesla, Inc., and introduced on June 22, 2012. The EPA official range
        for the 2017 Model S 100D, which is equipped with a 100 kWh (360 MJ)
        battery pack, is 335 miles (539 km), higher than any other electric
        car. The EPA rated the 2017 90D Model S's energy consumption at
        3.096 miles per kWh (200.9 watt-hours per kilometer or 32.33 kWh/100 mi
        or 20.09 kWh/100 km) for a combined fuel economy of 104 miles per gallon
        gasoline equivalent (2.26 L/100 km or 125 mpg‑imp). In 2016, Tesla
        updated the design of the Model S to closely match that of the Model X.
        As of January 2019, the following versions are available: 100D and
        P100D. In 2013, the Model S became the first electric car to top the
        monthly new car sales ranking in any country, twice leading in Norway,
        in September and December 2013 and also in Denmark in
        December 2015. Global Model S sales passed 250,000 units in
        September 2018. The U.S. is its leading market, with
        about 140,000 units delivered through December 2018. The Tesla Model
        S was the top selling plug-in electric car worldwide in 2015 and
        2016, and by the end of 2018 continued to rank as the second
        most-sold electric car in history after the Nissan Leaf. The
        December 2017 Consumer Reports owner satisfaction survey had the Tesla
        Model S at the top.
      </p>
      <ul className="Header__list menu">
          <li className='Header__item'>
              <NavLink className='Header__link' to={`${match.path}/`}>History</NavLink>
          </li>
          <li className='Header__item'>
              <NavLink className='Header__link' to={`${match.path}/description`}>Description</NavLink>
          </li>
          <li className='Header__item'>
              <NavLink className='Header__link' to={`${match.path}/image`}>Image</NavLink>
          </li>
      </ul>

      <Switch>
          <Route exact path='/models/' component={History} />
          <Route path='/models/description' component={Description} />
          <Route path='/models/image' component={Image} />
      </Switch>
    </div>
  );
};

export default ModelS;
