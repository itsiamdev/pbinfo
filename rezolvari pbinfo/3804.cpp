#include <iostream>
#include <cmath>
#include <math.h>
#include <iomanip>
using namespace std;

    int main(){
        
        double  p,A,a,b,c;
        cin >> a >> b >> c ;
        float r;
        p = (a+b+c)/2;
        A = sqrt(p*(p-a)*(p-b)*(p-c));
        r = (A*1.)/p*1.;
        r = (int) (r*100)/100.;
        if (r>0)
        {
            cout << fixed << setprecision(2) <<(float) r << endl;
        } else{
            cout << "Imposibil" << endl;
        }
    return 0;
    }