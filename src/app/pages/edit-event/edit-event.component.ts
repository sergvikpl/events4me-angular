import { Component, OnInit } from '@angular/core';

declare var ymaps:any;

@Component({
  selector: 'edit-event-page',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {

  public map :any
  public myPlacemark :any

  public imageFilePath;
  public uploadMessageError: string;
  uploadedEventImage: any = "assets/images/conf.png"

  constructor() { }

  ngOnInit(): void {
    ymaps.ready().then(() => {
      this.map = new ymaps.Map('map', {
        center: [59.931597, 30.360431],
        zoom: 12
      }, {
        searchControlProvider: 'yandex#search'
      });

      // Слушаем клик на карте.
      this.map.events.add('click', (event) => {
        let coords = event.get('coords');
        // Если метка уже создана – просто передвигаем ее.
        if (this.myPlacemark) {
          this.myPlacemark.geometry.setCoordinates(coords);
        }
        // Если нет – создаем.
        else {
          this.myPlacemark = this.createPlacemark(coords);
          this.map.geoObjects.add(this.myPlacemark);
          // Слушаем событие окончания перетаскивания на метке.
          this.myPlacemark.events.add('dragend', () => {
              this.getAddress(this.myPlacemark.geometry.getCoordinates());
          });
        }
        this.getAddress(coords);
        sessionStorage.setItem('coords', JSON.stringify(coords));
      });
    });
  }

  // Создание метки.
  createPlacemark(coords) {
    return new ymaps.Placemark(coords, {
      iconCaption: 'поиск...'
    }, {
      preset: 'islands#violetDotIconWithCaption',
      draggable: true
    });
  }

  // Определяем адрес по координатам (обратное геокодирование).
  getAddress(coords) {
    this.myPlacemark.properties.set('iconCaption', 'поиск...');
    ymaps.geocode(coords).then((res) => {
      let firstGeoObject = res.geoObjects.get(0);
      this.myPlacemark.properties.set({
        // Формируем строку с данными об объекте.
        iconCaption: [
          // Название населенного пункта или вышестоящее административно-территориальное образование.
          firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
          // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
          firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
        ].filter(Boolean).join(', '),
        // В качестве контента балуна задаем строку с адресом объекта.
        balloonContent: firstGeoObject.getAddressLine()
      });
        sessionStorage.setItem('addressConf', JSON.stringify(firstGeoObject.getAddressLine()));
    });
  }

  uploadEventImage(files) {
    if (files.length === 0)
      return;
    let fileType = files[0].type;
    if (fileType.match(/image\/*/) == null) {
      this.uploadedEventImage = null
      this.uploadMessageError = "Пожалуйста, загрузите изображение для события.";
      return;
    }
    let reader = new FileReader();
    this.imageFilePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.uploadedEventImage = reader.result;
    }
  }

}
