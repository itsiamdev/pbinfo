#include <iostream>
using namespace std;

int main()
{
    long int nr, min;
    bool exista=false, aux=true;
    cin>>nr;
    while(nr)
    {
        if(nr>0)
        {
            if(aux==true)
            {
                min=nr;
                aux=false;
                exista=true;
            }
            else
            {
                if(nr<min)
                    min=nr;
            }
        }
        cin>>nr;
    }
    if(exista==true)
        cout<<min;
    else
        cout<<"NU EXISTA";
}