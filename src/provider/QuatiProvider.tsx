import { QuatiProvider as LibQuatiProvider } from "@cpqd-quati/react";
import "@cpqd-quati/react/assets/fonts.css";
import "@cpqd-quati/tokens/core/css/_tokens.css";
import "@cpqd-quati/tokens/core/palettes/canario.css";
import "@cpqd-quati/react/assets/scroll.css";
import "@cpqd-quati/react/assets/motion.css";
// import "@cpqd-quati/react/style/main.scss";
// import "react-toastify/dist/ReactToastify.css";

export interface IQuatiProviderProps {
  children: React.ReactNode;
}

/**
 * Provedor de estilo do Quati
 * @author @cpqd
 * @returns
 */
export const QuatiProvider = ({ children }: IQuatiProviderProps) => {
  return <LibQuatiProvider>{children}</LibQuatiProvider>;
};

export default QuatiProvider;
