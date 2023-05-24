
// dataset team_resources
//features data
const x_train = [[0.5 , 0.8 , 0.7 , 1.  , 0.9 , 0.05, 0.6 , 0.3 , 0.4 , 0.15, 0.1 , 0.2 ],
   [0.6 , 0.05, 0.1 , 0.2 , 0.9 , 1.  , 0.7 , 0.8 , 0.5 , 0.4 , 0.3 ,
    0.15],
   [0.7 , 0.6 , 0.05, 0.1 , 1.  , 0.15, 0.9 , 0.8 , 0.5 , 0.3 , 0.4 , 0.2 ],
   [0.8 , 0.6 , 0.9 , 0.7 , 0.4 , 1.  , 0.3 , 0.5 , 0.2 , 0.1 , 0.15, 0.05],
   [0.05, 0.6 , 0.5 , 0.7 , 0.3 , 0.4 , 0.8 , 0.2 , 0.9 , 0.15, 0.1 , 1.  ],
   [0.5 , 1.  , 0.7 , 0.6 , 0.9 , 0.3 , 0.4 , 0.8 , 0.2 , 0.1 , 0.1 , 0.05],
   [1.  , 0.8 , 0.6 , 0.7 , 0.9 , 0.5 , 0.3 , 0.2 , 0.1 , 0.15, 0.4 , 0.05],
   [0.1 , 0.05, 0.7 , 0.8 , 0.6 , 0.5 , 0.2 , 0.4 , 0.9 , 0.3 , 0.15, 1.  ],
   [0.8 , 1.  , 0.9 , 0.7 , 0.6 , 0.5 , 0.2 , 0.3 , 0.1 , 0.15, 0.4 , 0.05],
   [1.  , 0.8 , 0.5 , 0.2 , 0.9 , 0.7 , 0.4 , 0.6 , 0.3 , 0.15, 0.05, 0.1 ],
   [0.1 , 0.05, 0.7 , 0.6 , 0.5 , 0.8 , 0.4 , 0.3 , 0.9 , 0.2 , 1.  , 0.15],
   [1.  , 0.8 , 0.9 , 0.6 , 0.7 , 0.4 , 0.3 , 0.2 , 0.5 , 0.15, 0.1 , 0.05],
   [1.  , 0.9 , 0.05, 0.8 , 0.5 , 0.1 , 0.4 , 0.7 , 0.3 , 0.6 , 0.2 , 0.15],
   [0.4 , 0.3 , 0.05, 0.2 , 0.1 , 0.15, 0.6 , 0.9 , 0.8 , 1.  , 0.7 , 0.5 ],
   [0.05, 1.  , 0.1 , 0.15, 0.2 , 0.3 , 0.4 , 0.6 , 0.7 , 0.9 , 0.8 , 0.5 ],
   [0.9 , 0.8 , 0.6 , 0.7 , 0.4 , 1.  , 0.5 , 0.3 , 0.1 , 0.15, 0.2 , 0.05],
   [0.3 , 0.05, 0.1 , 0.15, 0.4 , 0.2 , 0.7 , 0.8 , 1.  , 0.9 , 0.6 , 0.5 ],
   [0.05, 0.15, 0.4 , 0.3 , 0.2 , 0.1 , 0.7 , 0.8 , 1.  , 0.9 , 0.6 , 0.5 ],
   [0.15, 0.3 , 0.2 , 0.1 , 0.05, 0.4 , 0.7 , 0.8 , 1.  , 0.9 , 0.6 , 0.5 ],
   [0.8 , 0.6 , 0.7 , 0.9 , 0.1 , 0.05, 0.5 , 0.15, 0.4 , 1.  , 0.2 , 0.3 ],
   [0.05, 0.1 , 1.  , 0.15, 0.2 , 0.9 , 0.3 , 0.4 , 0.8 , 0.5 , 0.6 , 0.7 ],
   [0.9 , 0.6 , 0.1 , 0.7 , 0.15, 0.5 , 0.2 , 0.05, 0.4 , 0.3 , 0.8 , 1.  ],
   [1.  , 0.4 , 0.9 , 0.5 , 0.8 , 0.6 , 0.7 , 0.3 , 0.05, 0.2 , 0.1 , 0.15],
   [0.05, 0.1 , 0.15, 0.2 , 0.3 , 0.4 , 0.6 , 0.7 , 0.8 , 1.  , 0.9 , 0.5 ],
   [0.7 , 0.3 , 0.6 , 0.4 , 0.5 , 0.05, 0.2 , 0.1 , 0.15, 0.9 , 0.8 , 1.  ],
   [0.8 , 0.7 , 0.2 , 0.6 , 0.4 , 0.3 , 0.5 , 0.15, 1.  , 0.9 , 0.1 , 0.05]]

// labels data
const y_train = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
       
        //mencari jarak euclidean
        function euclidianDistance(a,b){
            var distance = 0
            var n
            for(n=0; n<a.length; n++){
                distance += Math.pow(a[n]-b[n], 2);
            }
            return distance**0.5
        }

        // mendapatkan jarak dari point baru ke setiap data
        function getNeigh(train, test){
            const distance = []
            var n
            for(n=0; n<train.length; n++){
                const dist = euclidianDistance(test, train[n]);
                distance.push(dist);
            }
            return distance;
        }

       
    
        //menjalankan inputan
        async function processData(){
            var slider1 = document.getElementById("cv").value /100;
            var slider2 = document.getElementById("regresi").value /100;
            var slider3 = document.getElementById("timeseries").value /100;
            var slider4 = document.getElementById("eda").value /100;
            var slider5 = document.getElementById("nlp").value /100;
            var slider6 = document.getElementById("speech").value /100;
            var slider7 = document.getElementById("data").value /100;
            var slider8 = document.getElementById("deploy").value /100;
            var slider9 = document.getElementById("fe").value /100;
            var slider10 = document.getElementById("be").value /100;
            var slider11 = document.getElementById("mlops").value /100;
            var slider12 = document.getElementById("writer").value /100;


            test = [slider1, slider2, slider3, slider4, slider5, slider6, slider7, slider8, slider9, slider10, slider11, slider12]
            if(test[0]==0 && test[1]==0 && test[2]==0 && test[3]==0 && test[4]==0 && 
               test[5]==0 && test[6]==0 && test[7]==0 && test[8]==0 && test[9]==0 && 
               test[10]==0 && test[11]==0){
                y_new = [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 
                         0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 
                         0.5, 0.5, 0.5, 0.5, 0.5, 0.5]
               }else{
                y_new = getNeigh(x_train, test)
                var y_min = Math.min.apply(null, y_new)
                var y_max = Math.max.apply(null, y_new)
                var delta = y_max-y_min
                    for(n=0; n<y_new.length; n++){
                        y_new[n] = 1 - ((y_new[n] - y_min)/delta)
                    } 
               }
            

            // opacity = 1 - ( (jarak - jarak_min)/(jarak_max - jarak_min))
            


            console.log(test)
            
            var img1 = document.getElementById("foto1")
            var img2 = document.getElementById("foto2") 
            var img3 = document.getElementById("foto3")
            var img4 = document.getElementById("foto4")
            var img5 = document.getElementById("foto5")
            var img6 = document.getElementById("foto6")
            var img7 = document.getElementById("foto7")
            var img8 = document.getElementById("foto8")
            var img9 = document.getElementById("foto9")
            var img10 = document.getElementById("foto10")
            var img11 = document.getElementById("foto11")
            var img12 = document.getElementById("foto12")
            var img13 = document.getElementById("foto13")
            var img14 = document.getElementById("foto14")
            var img15 = document.getElementById("foto15")
            var img16 = document.getElementById("foto16")
            var img17 = document.getElementById("foto17")
            var img18 = document.getElementById("foto18")
            var img19 = document.getElementById("foto19")
            var img20 = document.getElementById("foto20")
            var img21 = document.getElementById("foto21")
            var img22 = document.getElementById("foto22")
            var img23 = document.getElementById("foto23")
            var img24 = document.getElementById("foto24")
            var img25 = document.getElementById("foto25")
            var img26 = document.getElementById("foto26")

            img1.style.opacity = y_new[0];
            img2.style.opacity = y_new[1];
            img3.style.opacity = y_new[2];
            img4.style.opacity = y_new[3];
            img5.style.opacity = y_new[4];
            img6.style.opacity = y_new[5];
            img7.style.opacity = y_new[6];
            img8.style.opacity = y_new[7];
            img9.style.opacity = y_new[8];
            img10.style.opacity = y_new[9];
            img11.style.opacity = y_new[10];
            img12.style.opacity = y_new[11];
            img13.style.opacity = y_new[12];
            img14.style.opacity = y_new[13];
            img15.style.opacity = y_new[14];
            img16.style.opacity = y_new[15];
            img17.style.opacity = y_new[16];
            img18.style.opacity = y_new[17];
            img19.style.opacity = y_new[18];
            img20.style.opacity = y_new[19];
            img21.style.opacity = y_new[20];
            img22.style.opacity = y_new[21];
            img23.style.opacity = y_new[22];
            img24.style.opacity = y_new[23];
            img25.style.opacity = y_new[24];
            img26.style.opacity = y_new[25];
        } processData()
