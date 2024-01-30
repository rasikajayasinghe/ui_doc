import React from "react";
import LayoutColumns from "../pages/LayoutColumns";
import LayoutGrid from "../pages/LayoutGrid";
import LayoutGutters from "../pages/LayoutGutters";
import Accordions from "../pages/Accordions";
import Alerts from "../pages/Alerts";
import Avatars from "../pages/Avatars";
import Badges from "../pages/Badges";
import Breadcrumbs from "../pages/Breadcrumbs";
import Buttons from "../pages/Buttons";
import Cards from "../pages/Cards";
import Carousels from "../pages/Carousels";
import Dropdowns from "../pages/Dropdowns";
import Images from "../pages/Images";
import Listgroup from "../pages/Listgroup";
import Markers from "../pages/Markers";
import Modals from "../pages/Modals";
import NavTabs from "../pages/NavTabs";
import OffCanvas from "../pages/OffCanvas";
import Paginations from "../pages/Paginations";
import Placeholders from "../pages/Placeholders";
import Popovers from "../pages/Popovers";
import Progress from "../pages/Progress";
import Spinners from "../pages/Spinners";
import Toasts from "../pages/Toasts";
import Tooltips from "../pages/Tooltips";
import Tables from "../pages/Tables";
import FormElements from "../pages/FormElements";
import FormSelects from "../pages/FormSelects";
import FormChecksRadios from "../pages/FormChecksRadios";
import FormRange from "../pages/FormRange";
import FormPickers from "../pages/FormPickers";
import FormLayouts from "../pages/FormLayouts";
import UtilBackground from "../pages/UtilBackground";
import UtilBorder from "../pages/UtilBorder";
import UtilColors from "../pages/UtilColors";
import UtilDivider from "../pages/UtilDivider";
import UtilFlex from "../pages/UtilFlex";
import UtilSizing from "../pages/UtilSizing";
import UtilSpacing from "../pages/UtilSpacing";
import UtilOpacity from "../pages/UtilOpacity";
import UtilPosition from "../pages/UtilPosition";
import UtilTypography from "../pages/UtilTypography";
import UtilShadows from "../pages/UtilShadows";
import UtilExtras from "../pages/UtilExtras";
import ApexCharts from "../pages/ApexCharts";
import ChartJs from "../pages/ChartJs";
import MapLeaflet from "../pages/MapLeaflet";
import MapVector from "../pages/MapVector";
import IconRemix from "../pages/IconRemix";
import IconFeather from "../pages/IconFeather";

const publicRoutes = [
  { path: "/", element: <LayoutGrid /> },
  { path: "pages/layout/columns", element: <LayoutColumns /> },
  { path: "pages/layout/gutters", element: <LayoutGutters /> },
  { path: "pages/com/accordions", element: <Accordions /> },
  { path: "pages/com/alerts", element: <Alerts /> },
  { path: "pages/com/avatars", element: <Avatars /> },
  { path: "pages/com/badge", element: <Badges /> },
  { path: "pages/com/breadcrumbs", element: <Breadcrumbs /> },
  { path: "pages/com/buttons", element: <Buttons /> },
  { path: "pages/com/cards", element: <Cards /> },
  { path: "pages/com/carousel", element: <Carousels /> },
  { path: "pages/com/dropdown", element: <Dropdowns /> },
  { path: "pages/com/images", element: <Images /> },
  { path: "pages/com/listgroup", element: <Listgroup /> },
  { path: "pages/com/markers", element: <Markers /> },
  { path: "pages/com/modal", element: <Modals /> },
  { path: "pages/com/navtabs", element: <NavTabs /> },
  { path: "pages/com/offcanvas", element: <OffCanvas /> },
  { path: "pages/com/pagination", element: <Paginations /> },
  { path: "pages/com/placeholders", element: <Placeholders /> },
  { path: "pages/com/popovers", element: <Popovers /> },
  { path: "pages/com/progress", element: <Progress /> },
  { path: "pages/com/spinners", element: <Spinners /> },
  { path: "pages/com/toasts", element: <Toasts /> },
  { path: "pages/com/tooltips", element: <Tooltips /> },
  { path: "pages/com/tables", element: <Tables /> },
  { path: "pages/form/elements", element: <FormElements /> },
  { path: "pages/form/selects", element: <FormSelects /> },
  { path: "pages/form/checksradios", element: <FormChecksRadios /> },
  { path: "pages/form/range", element: <FormRange /> },
  { path: "pages/form/pickers", element: <FormPickers /> },
  { path: "pages/form/layouts", element: <FormLayouts /> },
  { path: "pages/chart/apex", element: <ApexCharts /> },
  { path: "pages/chart/chartjs", element: <ChartJs /> },
  { path: "pages/map/leaflet", element: <MapLeaflet /> },
  { path: "pages/map/vector", element: <MapVector /> },
  { path: "pages/icon/remix", element: <IconRemix /> },
  { path: "pages/icon/feather", element: <IconFeather /> },
  { path: "pages/util/background", element: <UtilBackground /> },
  { path: "pages/util/border", element: <UtilBorder /> },
  { path: "pages/util/colors", element: <UtilColors /> },
  { path: "pages/util/divider", element: <UtilDivider /> },
  { path: "pages/util/flex", element: <UtilFlex /> },
  { path: "pages/util/sizing", element: <UtilSizing /> },
  { path: "pages/util/spacing", element: <UtilSpacing /> },
  { path: "pages/util/opacity", element: <UtilOpacity /> },
  { path: "pages/util/position", element: <UtilPosition /> },
  { path: "pages/util/typography", element: <UtilTypography /> },
  { path: "pages/util/shadows", element: <UtilShadows /> },
  { path: "pages/util/extras", element: <UtilExtras /> }
];

export default publicRoutes;