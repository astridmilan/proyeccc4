import AppRouter from "./router/AppRouter";
//  Te moví tus estilos porqué esta ya no es la ruta principal. Los localicé en tu archivo Main 
const App = () => {
  return (
    <>
  {/* No es necesario colocar un componente sobre un componente y sobre otro. De hecho, el principal error de tus rutas fue eso: Si vas a descomponetizar las rutas con un archivo extra es suficiente. Checalo como está marcado en el componente "Main" */}
    <AppRouter/>
  
    </>
   
  );
};

export default App;