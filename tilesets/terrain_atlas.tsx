<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.5" tiledversion="1.7.2" name="terrain_atlas" tilewidth="32" tileheight="32" tilecount="1024" columns="32">
 <image source="terrain_atlas.png" width="1024" height="1024"/>
 <tile id="0">
  <animation>
   <frame tileid="470" duration="300"/>
   <frame tileid="438" duration="300"/>
   <frame tileid="502" duration="300"/>
   <frame tileid="502" duration="300"/>
   <frame tileid="501" duration="300"/>
   <frame tileid="501" duration="300"/>
   <frame tileid="502" duration="300"/>
  </animation>
 </tile>
 <tile id="169">
  <properties>
   <property name="collides" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index" id="2">
   <object id="1" x="3.0547" y="0.412797" width="25.7585" height="31.5377"/>
   <object id="2" x="7.5129" y="-11.4757"/>
   <object id="3" x="17" y="11" height="12"/>
   <object id="4" x="-25" y="-33" width="79" height="75"/>
   <object id="5" x="-124" y="-171"/>
   <object id="6" x="34" y="-23"/>
   <object id="7" x="25" y="8"/>
  </objectgroup>
 </tile>
 <tile id="366">
  <objectgroup draworder="index" id="2">
   <object id="1" x="10.5676" y="10.485" width="20.8875" height="20.9701"/>
   <object id="2" x="0.247678" y="0.412797" width="31.1249" height="30.9598"/>
  </objectgroup>
 </tile>
 <tile id="405">
  <animation>
   <frame tileid="405" duration="500"/>
   <frame tileid="469" duration="1500"/>
  </animation>
 </tile>
 <tile id="406">
  <animation>
   <frame tileid="406" duration="500"/>
   <frame tileid="470" duration="1500"/>
  </animation>
 </tile>
 <tile id="407">
  <animation>
   <frame tileid="407" duration="500"/>
   <frame tileid="471" duration="1500"/>
  </animation>
 </tile>
 <tile id="437">
  <animation>
   <frame tileid="469" duration="500"/>
   <frame tileid="437" duration="500"/>
   <frame tileid="469" duration="1000"/>
  </animation>
 </tile>
 <tile id="438">
  <animation>
   <frame tileid="470" duration="500"/>
   <frame tileid="438" duration="500"/>
   <frame tileid="470" duration="1000"/>
  </animation>
 </tile>
 <tile id="439">
  <animation>
   <frame tileid="471" duration="500"/>
   <frame tileid="439" duration="500"/>
   <frame tileid="471" duration="1000"/>
  </animation>
 </tile>
 <tile id="457">
  <properties>
   <property name="start" value="haus-ausgang"/>
  </properties>
 </tile>
 <tile id="458">
  <properties>
   <property name="start" value="entry-point"/>
  </properties>
 </tile>
 <tile id="469">
  <animation>
   <frame tileid="469" duration="1000"/>
   <frame tileid="437" duration="500"/>
   <frame tileid="469" duration="500"/>
  </animation>
 </tile>
 <tile id="470">
  <animation>
   <frame tileid="470" duration="1000"/>
   <frame tileid="438" duration="500"/>
   <frame tileid="470" duration="500"/>
  </animation>
 </tile>
 <tile id="471">
  <animation>
   <frame tileid="471" duration="1000"/>
   <frame tileid="439" duration="500"/>
   <frame tileid="471" duration="500"/>
  </animation>
 </tile>
 <tile id="501">
  <animation>
   <frame tileid="469" duration="1500"/>
   <frame tileid="501" duration="500"/>
  </animation>
 </tile>
 <tile id="502">
  <animation>
   <frame tileid="470" duration="1500"/>
   <frame tileid="502" duration="500"/>
  </animation>
 </tile>
 <tile id="503">
  <animation>
   <frame tileid="471" duration="1500"/>
   <frame tileid="503" duration="500"/>
  </animation>
 </tile>
 <tile id="533">
  <animation>
   <frame tileid="233" duration="1500"/>
   <frame tileid="533" duration="500"/>
  </animation>
 </tile>
 <tile id="534">
  <animation>
   <frame tileid="233" duration="1500"/>
   <frame tileid="534" duration="500"/>
  </animation>
 </tile>
 <tile id="535">
  <animation>
   <frame tileid="233" duration="1500"/>
   <frame tileid="535" duration="500"/>
  </animation>
 </tile>
 <tile id="621">
  <properties>
   <property name="collides" type="bool" value="true"/>
  </properties>
 </tile>
</tileset>
