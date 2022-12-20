CREATE TABLE VENTAS(
    ID_VENTA int not NULL PRIMARY KEY IDENTITY(1,1),
    Fecha_venta DATETIME,
    Dni_cliente VARCHAR(10),
    Nombre_empleado VARCHAR(100),
    Nombre_cliente VARCHAR(100),
    Importe_total DECIMAL(10,2),
    Direccion_envio_cliente VARCHAR(100),
    Direccion_sucursal_venta VARCHAR(100),
    Nombre_sucursal_venta VARCHAR(100),
    Producto VARCHAR(20),
    Cantidad int  
)

INSERT INTO VENTAS(Fecha_venta,Dni_cliente,Nombre_empleado,Nombre_cliente,Importe_total,Direccion_envio_cliente,Direccion_sucursal_venta,Nombre_sucursal_venta,Producto,Cantidad) VALUES('20221219 10:34:09 AM',43631099,'Juan','Robbi',190000,'Rio de janeiro 2232','Humboldt 2046','Sucursal Palermo','Monitor 24 pulgadas',3500)

SELECT Fecha_venta from VENTAS WHERE Cantidad=(select MAX(Cantidad) from VENTAS);