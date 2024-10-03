// Declaración de productos y precios
const productos = [
    { nombre: "Flor de Solapa", precio: 10 },
    { nombre: "Centros de mesa", precio: 50 },
    { nombre: "Coronas", precio: 100 },
    { nombre: "Pulseras", precio: 20 },
    { nombre: "Ramos", precio: 60 },
    { nombre: "Estructuras", precio: 200 }
];

// Función de inicio de sesión
function iniciarSesion() {
    const usuarioCorrecto = "usuario";
    const contraseñaCorrecta = "pass";
    let intentos = 3;
    let usuario, contraseña;

    do {
        usuario = prompt("Ingrese su usuario:(usuario)");
        contraseña = prompt("Ingrese su contraseña:(pass)");
        if (usuario === usuarioCorrecto && contraseña === contraseñaCorrecta) {
            console.log("Inicio de sesión exitoso.");
            return true;
        } else {
            intentos--;
            alert("Usuario o contraseña incorrectos. Intentos restantes: " + intentos);
        }
    } while (intentos > 0);

    console.log("Se agotaron los intentos.");
    return false;
}

// Función para seleccionar productos y cantidades
function seleccionarProductos() {
    let total = 0;
    let continuar;
    
    do {
        let seleccion = parseInt(prompt("Seleccione un producto:\n1. Flor de Solapa\n2. Centros de mesa\n3. Coronas\n4. Pulseras\n5. Ramos\n6. Estructuras")) - 1;
        let cantidad = parseInt(prompt("¿Cuántas unidades desea de " + productos[seleccion].nombre + "?"));
        total += productos[seleccion].precio * cantidad;
        console.log("Producto: " + productos[seleccion].nombre + ", Cantidad: " + cantidad + ", Subtotal: $" + (productos[seleccion].precio * cantidad));
        
        continuar = prompt("¿Desea agregar otro producto? (si/no)").toLowerCase();
    } while (continuar === "si");

    return total;
}

// Función para calcular el total con opciones de envío y pago
function calcularTotal(total) {
    let envio = prompt("¿Desea envío a domicilio con costo adicional de $10? (si/no)").toLowerCase();
    if (envio === "si") {
        total += 10;
    }

    let pago = prompt("¿Cómo desea pagar? (1. Tarjeta - Sin descuento, 2. Efectivo - 10% de descuento)").toLowerCase();
    if (pago === "2" || pago === "efectivo") {
        let descuento = total * 0.1;
        total -= descuento;
        alert("Pago en efectivo seleccionado. Descuento del 10%. Descuento aplicado: $" + descuento.toFixed(2));
    }

    return total;
}

// Llamada a las funciones principales
if (iniciarSesion()) {
    let totalCompra = seleccionarProductos();
    let totalFinal = calcularTotal(totalCompra);
    alert("Total a pagar: $" + totalFinal.toFixed(2));
    console.log("Total final: $" + totalFinal.toFixed(2));
}
else{
    console.log("Sesión finalizada...");
    alert("Se acabaron los intentos...");
}
