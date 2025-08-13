
import Link from 'next/link';
import styles from './footer.module.css';
import Image from 'next/image';
import Logo from '../../assets/logo.svg';

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <div className={styles.logoWrapper}>
            {/* <div className={styles.logoText}>
              <span className={styles.companyName}>
                Sah<span className={styles.highlight}>Construction</span>
              </span>

            </div> */}
            <Image className={styles.logoImage} src={Logo} alt="Logo" height={60} width={60} />
          </div>
          <p className={styles.companyDesc}>
            Leading the way in innovative construction and architectural solutions,
            delivering excellence in every project.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h4>Quick Links</h4>
          <nav className={styles.footerNav}>
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/works">Works</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/admin/login">Admin Login</Link>
          </nav>
        </div>

        <div className={styles.footerSection}>
          <h4>Contact Info</h4>
          <div className={styles.contactInfo}>
            <p>Patna</p>
            <p>India</p>
            <p>Phone: +91-98826-26050</p>
            <p>Email: ashokkumarsah638@gmail.com</p>
          </div>o
        </div>


      </div>

      <div className={styles.footerBottom}>
        <div className={styles.socialLinks}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Sah Construction. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;