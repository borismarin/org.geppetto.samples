pyramidal.electrical.getModelTree();
G.addWidget(3);
TreeVisualiserDAT1.setData(pyramidal, {expandNodes: true});
TreeVisualiserDAT1.setPosition(140,70);
TreeVisualiserDAT1.setSize(600,700);
G.incrementCameraPan(0.15, -0.1)
G.incrementCameraZoom(-0.25)
TreeVisualiserDAT1.setName("Neocortical Layer 5b Pyramidal cell")
G.addWidget(1);
Popup1.setMessage("Models of neocortical layer 5b pyramidal cells capturing a wide range of dendritic and perisomatic active properties. Hay E, Hill S, Schürmann F, Markram H, Segev I.");
Popup1.setName("Description");
