import React, { FC } from "react";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { wrapper } from "../store/index";

const MyApp: FC<AppProps> = ({
  Component,
  ...rest
}) => {
  const {
    store,
    props,
  } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
