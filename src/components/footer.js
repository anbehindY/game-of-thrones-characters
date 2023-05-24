import style from '../styles/footer.module.css';

const Footer = () => (
  <footer className={style.footer}>
    <p className={style.author}>
      ©️Alfie Yang
      {' '}
      <a href="https://github.com/anbehindY" className={style.link}>@anbehindY</a>
    </p>
    <p className={style.designCredit}>
      Creative Commons design by
      {' '}
      <a href="https://www.behance.net/sakwadesignstudio" className={style.link}>Nelson Sakwa</a>
    </p>
  </footer>
);

export default Footer;
