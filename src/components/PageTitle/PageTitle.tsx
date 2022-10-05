import styles from './PageTitle.module.scss'

interface IPageTitle {
   title:string
}

export const PageTitle = ({title} :IPageTitle) => {
   return (
      <>
         <h1 className={styles.title}>{title}</h1>
      </>
   );
};