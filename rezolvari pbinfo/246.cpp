#include <iostream>
using namespace std;

int main()
{
    long long k = 0, impar = 0 , impar2 = 0;
    int n ;
    cin>>n;
    for(int x = 0 ; x < n ; x++ )
    {
       cin>>k;
       if(k % 2 == 1)
       {
            impar = impar2;
            impar2 = k;
       }
    }
    if(impar != 0)
        cout<<impar<<" "<<impar2;
    else
        cout<<"Numere insuficiente";
    return 0;
}