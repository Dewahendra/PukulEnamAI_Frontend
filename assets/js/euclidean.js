
// dataset team_resources
//features data
const x_train = [[ 50,  80,  70, 100,  90,   5,  60,  30,  40,  15,  10,  20],
       [ 60,   5,  10,  20,  90, 100,  70,  80,  50,  40,  30,  15],
       [ 70,  60,   5,  10, 100,  15,  90,  80,  50,  30,  40,  20],
       [ 80,  60,  90,  70,  40, 100,  30,  50,  20,  10,  15,   5],
       [  5,  60,  50,  70,  30,  40,  80,  20,  90,  15,  10, 100],
       [ 50, 100,  70,  60,  90,  30,  40,  80,  20,  10,  10,   5],
       [100,  80,  60,  70,  90,  50,  30,  20,  10,  15,  40,   5],
       [ 10,   5,  70,  80,  60,  50,  20,  40,  90,  30,  15, 100],
       [ 80, 100,  90,  70,  60,  50,  20,  30,  10,  15,  40,   5],
       [100,  80,  50,  20,  90,  70,  40,  60,  30,  15,   5,  10],
       [ 10,   5,  70,  60,  50,  80,  40,  30,  90,  20, 100,  15],
       [100,  80,  90,  60,  70,  40,  30,  20,  50,  15,  10,   5],
       [100,  90,   5,  80,  50,  10,  40,  70,  30,  60,  20,  15],
       [ 40,  30,   5,  20,  10,  15,  60,  90,  80, 100,  70,  50],
       [  5, 100,  10,  15,  20,  30,  40,  60,  70,  90,  80,  50],
       [ 90,  80,  60,  70,  40, 100,  50,  30,  10,  15,  20,   5],
       [ 30,   5,  10,  15,  40,  20,  70,  80, 100,  90,  60,  50],
       [  5,  15,  40,  30,  20,  10,  70,  80, 100,  90,  60,  50],
       [ 15,  30,  20,  10,   5,  40,  70,  80, 100,  90,  60,  50],
       [ 80,  60,  70,  90,  10,   5,  50,  15,  40, 100,  20,  30],
       [  5,  10, 100,  15,  20,  90,  30,  40,  80,  50,  60,  70],
       [ 90,  60,  10,  70,  15,  50,  20,   5,  40,  30,  80, 100],
       [100,  40,  90,  50,  80,  60,  70,  30,   5,  20,  10,  15],
       [  5,  10,  15,  20,  30,  40,  60,  70,  80, 100,  90,  50],
       [ 70,  30,  60,  40,  50,   5,  20,  10,  15,  90,  80, 100],
       [ 80,  70,  20,  60,  40,  30,  50,  15, 100,  90,  10,   5]]

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
            // get value from slider
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
            
            // make an array of test data from slider
            test = [slider1, slider2, slider3, slider4, slider5, slider6, slider7, slider8, slider9, slider10, slider11, slider12]
            
            //compute value for the opacity of the talent images
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
               
             //get images 
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
            
            //set the opacity of the images with the value we got previously
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
            
        }
        processData();
