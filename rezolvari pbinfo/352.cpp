#include <iostream>
using namespace std;

int main()
{
    long long n,i,j,k;
    cin>>n;
    for(j=1;j<=n/2;j++)
    {
        i=(2*n-j-j*j)/(2*j+2);
        if(i>=1 && n==(j+1)*(2*i+j)/2)
        {
            for(k=0;k<=j;k++)
            {
                cout<<k+i<<" ";
            }
        cout<<endl;
        }

    }
}