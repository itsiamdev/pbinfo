#include <iostream>

using namespace std;

int main()
{
    int n,min=9999999,k=0,M=0;
    cin>>n;
    while(n!=0)
    {
        if(n > 9 && n < 100 && n < min)
            {
                min=n;
                k++;
            }
        cin>>n;
    }
    M=min;
    if(k==0)
        cout<<"NU EXISTA";
    else cout<<M;

    return 0;
}