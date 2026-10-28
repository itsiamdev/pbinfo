#include <iostream>
using namespace std;

int main()
{
    int nr, max=-1000000;
    cin>>nr;
    if(nr==0)
    {
        cout<<"NU EXISTA";
    }
    else
    {
        while(nr)
        {
            max = (nr>max)? nr:max;
            cin>>nr;
        }
        cout<<max;
    }
}