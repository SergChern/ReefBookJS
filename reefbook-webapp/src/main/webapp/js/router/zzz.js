/**
 * Created by serg on 08.09.16.
 */
define(['underscore', 'backbone', 'jquery', 'view/ekrdot',
		'collection/grafs', '../model/graf',
		'collection/menu1s', '../model/menu1'
	],
	function (_, Backbone, $, EkrDot, Grafs, Graf,
		Menu1s, Menu1) {
		var ZZZ = {
			'000': {
				'init': function (self) {
					self.collection = new Menu1s();
					self.options['attrmodel'] = new Menu1().attributes;
				},
				'otherwise': function () {
					// Событие есть, нужна реакция на него, хотя бы по умолчанию
				}
			},
			'098': {
				'init': function (self) {
					self.collection = new Grafs();
					self.options['attrmodel'] = new Graf().attributes;
				},
				'click #next': function () {
					alert('Привет2');
				},
				'otherwise': function () {
				// Событие есть, нужна реакция на него, хотя бы по умолчанию
				}

				/*,
				'click #TGrid1ButSp1': function () {
					imtochki = {004};
					Tip_Obj ={Grid};
					Obj_Del =1;
					FormCaption ={Отчеты для };
					Func ={VSubstrF~IMT_FIRST^IMT^1^3@}; F_Val,
						Func ={VVC~FiltrSQL^IMT_FIRST=^IMT_FIRST^@VAL_MASTER^,^IMT_FIRST^@}; F_Val,
			INTO_MASTER ={,IMT_FIRST};
Func ={IVV~^FormCaption^ документа ^IMT_FIRST^@}; F_Val,
				},
				'click #TGrid1ButSp2': function () {
	imtochki = {016};
	Tip_Obj ={Grid};
	Obj_Del =1;
	FormCaption ={Доп.Меню для };
Func ={VSubstrF~IMT_FIRST^IMT^1^3@}; F_Val,
	Func ={VVC~FiltrSQL^IMT_FIRST=^IMT_FIRST^@VAL_MASTER^,^IMT_FIRST^@}; F_Val,
	INTO_MASTER ={,IMT_FIRST};
Func ={IVV~^FormCaption^ документа ^IMT_FIRST^@}; F_Val,
				}*/

			}
		};
		return ZZZ;
	});