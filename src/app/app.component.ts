import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularApp';

  productos = [{
    "id": 34,
    "imagen": "https://jesaal.files.wordpress.com/2013/09/botellarelax.jpg?w=500",
    "nombre": "café",
    "gluten": false,
    "precio": 1.45,
    "categoria": {
      "id": 1,
      "nombre": "bebidas"
    },
    "historico": [{
      "fecha": "17/01/2020",
      "precio": 1.45
    }, {
      "fecha": "01/12/2019",
      "precio": 1.40
    }, {
      "fecha": "25/11/2019",
      "precio": 1.20
    }]
  }, {
    "id": 4,
    "imagen": "https://wallpaperstock.net/wallpapers/thumbs1/50832wide.jpg",
    "nombre": "galletas",
    "gluten": true,
    "precio": 4.6,
    "categoria": {
      "id": 1,
      "nombre": "dulces"
    },
    "historico": [{
      "fecha": "17/01/2020",
      "precio": 3.45
    }, {
      "fecha": "01/12/2019",
      "precio": 3.40
    }, {
      "fecha": "25/11/2019",
      "precio": 3.20
    }]
  }, {
    "id": 3,
    "imagen": "https://images.ladbible.com/thumbnail?type=jpeg&url=http://beta.ems.ladbiblegroup.com/s3/content/90a9e2605defa1c6f1da81210a20f3dc.png&quality=70&width=720",
    "nombre": "leche",
    "gluten": false,
    "precio": 1.10,
    "categoria": {
      "id": 1,
      "nombre": "bebidas"
    },
    "historico": [{
      "fecha": "17/01/2020",
      "precio": 1.45
    }, {
      "fecha": "01/12/2019",
      "precio": 1.40
    }, {
      "fecha": "25/11/2019",
      "precio": 1.20
    }]
  }]

  pSeleccionado = this.productos[0];

  seleccionarProducto = function (producto) {
    console.log("Hemos hecho click");
    this.pSeleccionado = producto;
  }

  // FONT AWESOME ICONS
  faCoffee = faCoffee;
}
