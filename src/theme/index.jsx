import { ConfigProvider } from "antd";
const ThemeConfig = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        hashed: false,
        token: {
          fontFamily: "var(--font-primary)",
          colorPrimary: "#e25319",
          colorInfo: "#e25319",
          colorSuccess: "#3fc28a",
          colorWarning: "#efbe12",
          colorError: "#f45b69",
          colorBgBase: "#131313",
          colorTextBase: "#ffffff",
          fontSize: "var(--text-xl)",
        },
        components: {
          Layout: {
            bodyBg: "var(--clr-black)",
            headerBg: "var(--clr-black)",
            siderBg: "rgba(var(--clr-gray-rgb),0.05)",
          },
          Menu: {
            itemBg: "rgba(var(--clr-gray-rgb),0.0005)",
            itemColor: "var(--clr-white)",
            itemHoverBg: "rgba(226,83,25,0.050980392156862744)",
            itemHoverColor: "var(--clr-white)",
            itemActiveBg: "rgba(var(--clr-primary-rgb),0.10)",
            itemSelectedBg: "rgba(var(--clr-primary-rgb),0.050980392156862744)",
            iconMarginInlineEnd: "var(--space-lg)",
            iconSize: "var(--space-2xl)",
            itemHeight: 50,
            margin: "var(--space-lg)",
            padding: "var(--space-lg)",
          },
          Button: {
            borderRadius: "var(--space-md)",
            controlHeight: "5.6rem",
            controlHeightSM: "3.4rem",
            paddingInline: "var(--space-xl)",
            paddingInlineSM: "var(--space-sm)",
            paddingBlock: "var(--space-xl)",
            paddingBlockSM: "var(--space-sm)",
            contentFontSize: "var(--text-xl)",
            fontSize: "var(--text-xl)",
            defaultShadow: "none",
            primaryShadow: "none",
            dangerShadow: "none",
            onlyIconSize: "var(--icon)",
            defaultBorderColor: "rgba(var(--clr-gray-rgb),0.2)",
            onlyIconSizeSM: 18,
            borderRadiusSM: 5,
          },
          Breadcrumb: {
            itemColor: "rgb(255,255,255)",
            lastItemColor: "rgb(255,255,255)",
            linkColor: "rgb(226,83,25)",
            separatorMargin: 4,
            fontSize: 14,
            lineHeight: 1.57,
          },
          Pagination: {
            borderRadius: 8,
            margin: 5,
            fontSize: 14,
            lineHeight: 1.57,
            controlHeight: 36,
            itemSize: 36,
          },
          Input: {
            controlHeight: 56,
            paddingInline: 16,
            paddingBlock: 16,
            inputFontSize: 16,
            colorBorder: "rgba(var(--clr-gray-rgb),0.2)",
            activeBorderColor: "var(--clr-primary)",
            hoverBorderColor: "var(--clr-primary)",
            borderRadius: "var(--space-md)",
            colorText: "rgb(255,255,255)",
          },
          Checkbox: {
            colorBorder: "rgba(162,161,168,0.2)",
            colorPrimaryBorder: "rgb(226,83,25)",
            colorPrimary: "rgb(226,83,25)",
            controlInteractiveSize: 20,
            borderRadiusSM: 6,
            paddingXS: 10,
          },
          Table: {
            footerColor: "rgb(19,19,19)",
            headerBg: "rgb(19,19,19)",
            borderColor: "rgba(var(--clr-gray-rgb),0.10196078431372549)",
            rowSelectedBg: "rgba(var(--clr-gray-rgb),0.1)",
            rowSelectedHoverBg: "rgba(var(--clr-gray-rgb),0.05)",
            lineHeight: 1.57,
          },
          Calendar: {
            itemActiveBg: "rgb(226,83,25)",
            colorPrimary: "rgb(255,255,255)",
          },
          Tag: {
            defaultColor: "rgb(226,83,25)",
            defaultBg: "rgba(226,83,25,0.10196078431372549)",
            colorBorder: "rgba(226,83,25,0.10196078431372549)",
            fontSize: 12,
          },
          Modal: {
            titleColor: "rgb(255,255,255)",
            titleFontSize: 20,
            fontHeight: 1.5,
            colorBgMask: "rgba(0,0,0,0.7)",
          },
          Tabs: {
            colorBorderSecondary: "rgba(162,161,168,0.2)",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeConfig;
