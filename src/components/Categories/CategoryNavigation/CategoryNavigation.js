import { NavLink } from 'react-router-dom';

const CategoryNavigation = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/categories/all">All</NavLink></li>
                <li><NavLink to="/categories/Dogs">Dogs</NavLink></li>
                <li><NavLink to="/categories/Cats">Cats</NavLink></li>
                {/* <li><Link to="/categories/parrots">Parrots</Link></li>
                <li><Link to="/categories/reptiles">Reptiles</Link></li>
                <li><Link to="/categories/other">Other</Link></li> */}
            </ul>
        </nav>
    );
};

export default CategoryNavigation;