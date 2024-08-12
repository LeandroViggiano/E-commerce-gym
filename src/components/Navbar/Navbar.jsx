import React from 'react';
import { Home, Search, Bell, Star, User } from 'react-feather';
import styles from './Navbar.module.css';
import CartWidget from '../CartWidget/CartWidget';

const NavItem = ({ icon, text, active = false, notifications = 0 }) => (
  <span className={`${styles.navItem} ${active ? styles.active : ''}`}>
    {icon}
    <span className={styles.text}>{text}</span>
    {notifications > 0 && (
      <span className={styles.notification}>
        <span className={styles.notificationInner}>{notifications}</span>
      </span>
    )}
  </span>
);

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.menu} id="nav">
        <NavItem icon={<Home className={styles.icon} />} text="Home" active />
        <NavItem icon={<Search className={styles.icon} />} text="Search" />
        <NavItem icon={<Bell className={styles.icon} />} text="Notifications" notifications={13} />
        <NavItem icon={<Star className={styles.icon} />} text="Favorites" />
        <NavItem icon={<User className={styles.icon} />} text="Your Profile" notifications={1} />
       <CartWidget />
      </nav>
    </header>
  );
};

export default Navbar;