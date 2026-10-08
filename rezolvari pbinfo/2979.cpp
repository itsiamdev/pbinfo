#include <fstream>
using namespace std;

int main(){
    ifstream fin("cartele.in");
    ofstream fout("cartele.out");
    int C, N;
    fin>>C>>N;
    char sex, prezenta;
    int h, m, s;
    int b=0, f=0;
    int t=0, t0=0, t1=0, deltaT=0;
    bool conditie=false;
    while(N--){
        fin>>sex>>prezenta>>h>>m>>s;
        if(sex=='b'){
            if(prezenta=='i') b++;
            else b--;
        }
        else{
            if(prezenta=='i') f++;
            else f--;
        }
        if(C==2){
            t0=t1;
            t1=s+60*m+60*60*h;
            if(conditie) t+=t1-t0;
            if(b==f && b!=0) conditie=true;
            else conditie=false;
        }
        if(C==3){
            t0=t1;
            t1=s+60*m+60*60*h;
            if(conditie) deltaT+=t1-t0;
            else{
                if(t<deltaT) t=deltaT;
                deltaT=0;
            }
            if(b%2) conditie=true;
            else conditie=false;
        }
    }
    fin.close();
    if(C==1) fout<<b<<' '<<f;
    else fout<<t;
    fout.close();
    return 0;
}