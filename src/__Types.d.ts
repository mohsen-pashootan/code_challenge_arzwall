type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

type ReactFragment = {} | ReactNodeArray;
type ReactNode =
  | ReactChild
  | ReactFragment
  | ReactPortal
  | boolean
  | null
  | undefined;

type Props = {
  children: ReactNode;
};
