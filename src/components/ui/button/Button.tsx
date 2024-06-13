import s from './Button.module.scss';

type buttonTypeProps = {
  title: string
  onClickHandler?: () => void
  isDisabled?: boolean
}

export const Button = ({ title, isDisabled, onClickHandler }: buttonTypeProps) => {
  return (
    <button className={s.button} disabled={isDisabled} onClick={onClickHandler}>
      {title}
    </button>
  );
};
