import styles from './PageTitle.module.scss'

interface IPageTitle {
   title:string
}

export const PageTitle = ({title} :IPageTitle) => {
   return (
      <>
        <h1>{title}</h1>
      </>
   );
};